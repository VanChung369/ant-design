export type StatusDesignProps = {
  text?: string;
  status?: 'default' | 'success' | 'processing' | 'error' | 'warning';
  className?: string;
  [key: string]: any;
};
