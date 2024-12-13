import { Input } from "@/components/atom/input";
import { Label } from "@/components/atom/label";
import classNames from "classnames";

interface FormFieldProps {
    label?: string;
    placeholder: string;
    labelType: "Fixed" | "Floating";
    full?: boolean;
    formClasses?: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const FormField = ({
    label,
    placeholder,
    labelType,
    formClasses,
    full=false
}: FormFieldProps) => {
    const fieldClassnames = classNames(
        "px-8 py-4",
        "bg-red-300",
        "rounded-md",
        {
            "w-full": full,
            "w-fit": !full,
        }
    );

    const labelClasses = classNames();

    const inputClasses = classNames(
        "px-4 py-2",
        "bg-white",
        "rounded-md",
        {}
    );

    return (
        <div className={ fieldClassnames && formClasses }>
            { label && <Label
                label={ label }
                classes={ labelClasses }
            />}
            <Input
                placeholder={ placeholder }
                labelType={ labelType }
                classes={ inputClasses }
                onChange={ () => onchange }
            />
        </div>
    );
}
