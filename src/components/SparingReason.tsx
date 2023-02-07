
export interface SparingReasonProps {
    sparingReason: string;
    updateSparingReason: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}
const SparingReason: React.FC<SparingReasonProps> = ({ sparingReason, updateSparingReason }) => (
    <>
        <label>
            Reason for sparing:
            <textarea value={sparingReason} onChange={updateSparingReason} rows={4} cols={50} />
        </label>
    </>
);

export default SparingReason;
