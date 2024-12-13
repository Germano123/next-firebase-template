import classNames from "classnames";

interface ButtonProps {
    label: string;
    size?: "small" | "medium" | "large" | "larger";
    color?: "primary" | "secondary" | "danger" | "white" | "black";
    variant?: "filled" | "outline";
    textAlign?: "start" | "center" | "end";
    onClick: () => void;
}

export const Button = ({
    label,
    size = "medium",
    color = "primary",
    variant = "filled",
    textAlign = "end",
    onClick,
}: ButtonProps) => {
    const buttonClasses = classNames(
        "w-fit",
        "flex items-center",
        "rounded-md",
        {
            // sizes
            "px-2 w-12 h-6 text-sm": size === "small",
            "px-6 w-16 h-12 text-md": size === "medium",
            "px-2 py-2 w-20 h-10 text-lg": size === "large",
            "px-2 py-2 w-24 h-12 text-xl": size === "larger",

            // color
            "border-primary bg-primary text-white": color === "primary",
            "border-secondary bg-secondary": color === "secondary",
            "border-danger bg-danger": color === "danger",
            "border-white bg-white": color === "white",
            "border-black bg-black text-white": color === "black",

            // variants
            "border-2": variant === "outline",
            
            // text alignment
            "justify-start": textAlign === "start",
            "justify-center": textAlign === "center",
            "justify-end": textAlign === "end",
        }
    );

    return (
        <button
        onClick={ () => onClick }
        className={ buttonClasses }>{ label }</button>
    );
}
