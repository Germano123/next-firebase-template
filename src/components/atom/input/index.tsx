interface InputProps {
    placeholder: string;
    labelType: string;
    classes?: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({ 
    placeholder,
    labelType,
    classes,
    onChange,
}: InputProps) => {
    return (
        <input
        className={ classes }
        placeholder={ placeholder }
        onChange={ () => onchange }
        ></input>
    );
}
