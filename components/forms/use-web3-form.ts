"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";

type Status = "idle" | "sending" | "success" | "error";

interface UseWeb3FormOptions {
  /** Si se pasa, redirige a esta ruta en vez de mostrar el estado "success" inline. */
  redirectTo?: string;
}

/** Envía un <form> a Web3Forms vía fetch, sin recargar la página. */
export function useWeb3Form({ redirectTo }: UseWeb3FormOptions = {}) {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setErrorMessage("");

    const form = e.currentTarget;
    const payload = Object.fromEntries(new FormData(form));

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await response.json();
      if (response.status === 200) {
        if (redirectTo) {
          router.push(redirectTo);
        } else {
          setStatus("success");
        }
      } else {
        setErrorMessage(result.message ?? "Hubo un error, inténtalo de nuevo.");
        setStatus("error");
      }
    } catch {
      setErrorMessage("Error de conexión. Inténtalo de nuevo.");
      setStatus("error");
    }
  }

  return { status, errorMessage, submit };
}
