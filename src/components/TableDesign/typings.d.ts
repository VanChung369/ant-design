import {
  FilterValue,
  SorterResult,
  TableCurrentDataSource,
  TableRowSelection,
} from 'antd/es/table/interface';
import { GetRowKey } from 'rc-table/es/interface';
import { ReactNode } from 'react';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export type TableDesignProps<T, D> = {
  className?: string;
  totalPagination?: number;
  columns?: ProColumns<any, any>[] | undefined;
  pageSizePagination?: number;
  currentPagination?: number;
  loading?: boolean;
  onChangePagination?: ((page: number, pageSize: number) => void) | undefined;
  onChange?: (
    pagination: TablePaginationConfig,
    filters: Record<string, FilterValue | null>,
    sorter: SorterResult<any> | SorterResult<any>[],
    extra: TableCurrentDataSource<any>,
  ) => void;
  rowSelection?: false | TableRowSelection<any>;
  rowKey?: string | GetRowKey<any> | undefined;
  dataSource?: readonly any[] | undefined;
  customComponent?: any;
  typeTable?: string;
  children?: ReactNode;
  emptyText?: string;
  onChangeEditTable?: (value: readonly T[]) => void;
  [key: string]: any;
};
