import { ReactNode } from 'react';
import { Stack, TextField, FormHelperText, Typography } from '@mui/material';

export type IFormInputProps = {
  label: string;
  name: string;
  value: ReactNode | string | number;
  error?: string;
  placeholder?: string;
  rows?: number;
  spacing?: number;
  multiline?: boolean;
  readOnly?: boolean;
  onChangeValue?: (value: string) => void;
};

export default function FormInput({
  value,
  error,
  label,
  name,
  placeholder = '',
  spacing = 1,
  rows,
  multiline = false,
  readOnly = false,
  onChangeValue,
}: IFormInputProps) {
  const randomId = Math.random();

  return (
    <Stack direction="row" alignItems="center" spacing={spacing}>
      <Typography variant="body1" fontWeight="bolder" color="text.primary" sx={{ width: '60px' }}>
        {label}
      </Typography>
      <TextField
        id={`with-label-input-${randomId}`}
        placeholder={placeholder}
        value={value}
        rows={rows}
        multiline={multiline}
        InputProps={{
          readOnly: readOnly,
        }}
        onChange={(e) => onChangeValue?.(e.target.value)}
        sx={{
          width: '300px',
          '& .MuiOutlinedInput-root': {
            height: '40px',
          },
        }}
      />
      {error && (
        <FormHelperText error id="electrical-meter-image-upload" sx={{ textAlign: 'right' }}>
          {error}
        </FormHelperText>
      )}
    </Stack>
  );
}
