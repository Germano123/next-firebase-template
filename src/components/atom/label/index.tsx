interface LabelProps {
    label: string;
    classes?: string;
}

export const Label = ({ label, classes }: LabelProps) => {
    return (
        <div className={ classes }>
            { label }
        </div>
    );
}
