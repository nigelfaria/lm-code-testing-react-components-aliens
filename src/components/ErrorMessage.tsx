
export interface ErrorMessageProps {
    message: string | undefined;
}
const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => (
    <>
        <p className="ErrorMessage">{message}</p>
    </>
);

export default ErrorMessage;
