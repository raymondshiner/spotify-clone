import { Chip } from "@mui/material";

type SpotifyChipProps = {
    label: string;
};

export const SpotifyChip = ({ label }: SpotifyChipProps) => {
    return <Chip role="button" label={label} />;
};
