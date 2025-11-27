import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
    children: React.ReactNode;
    className?: string;
    id?: string;
    background?: "white" | "gray" | "blue";
}

export function Section({ children, className, id, background = "white", ...props }: SectionProps) {
    const bgStyles = {
        white: "bg-white",
        gray: "bg-slate-50",
        blue: "bg-blue-900 text-white",
    };

    return (
        <section
            id={id}
            className={cn("py-16 sm:py-24", bgStyles[background], className)}
            {...props}
        >
            <div className="mx-auto max-w-7xl px-6 lg:px-8">{children}</div>
        </section>
    );
}
