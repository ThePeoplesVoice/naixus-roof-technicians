import { business } from "@/lib/site";
import { cn } from "@/lib/utils";

export function ContactLines({
  invert = false,
}: {
  invert?: boolean;
}) {
  return (
    <ul className="space-y-2 text-sm">
      <li>
        <a
          href={`tel:${business.phoneTel}`}
          className={cn(
            "inline-flex min-h-11 items-center underline-offset-4 hover:underline",
            invert ? "text-paper" : "text-ink",
          )}
        >
          {business.phone}
        </a>
      </li>
      <li>
        <a
          href={`mailto:${business.email}`}
          className={cn(
            "inline-flex min-h-11 items-center break-all underline-offset-4 hover:underline",
            invert ? "text-paper" : "text-ink",
          )}
        >
          {business.email}
        </a>
      </li>
    </ul>
  );
}
