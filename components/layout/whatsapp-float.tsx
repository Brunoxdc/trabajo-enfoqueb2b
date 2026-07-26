import { whatsappUrl } from "@/lib/site-config";
import { WhatsappIcon } from "@/components/icons/whatsapp-icon";

export function WhatsappFloat({ message }: { message?: string }) {
  return (
    <a
      className="fixed right-5 bottom-5 z-[60] w-14 h-14 rounded-full bg-[#25D366] grid place-items-center shadow-[0_10px_25px_-5px_rgba(37,211,102,0.6)] text-white transition-transform duration-200 hover:scale-110 hover:bg-[#20ba5a]"
      href={whatsappUrl(message)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp"
    >
      <WhatsappIcon />
    </a>
  );
}
