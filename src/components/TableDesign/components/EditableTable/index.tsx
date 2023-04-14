import type {
  EditableFormInstance,
  ProColumns,
  RequestData,
  RowEditableConfig,
} from '@ant-design/pro-components';
import { EditableProTable } from '@ant-design/pro-components';
import { RecordCreatorProps } from '@ant-design/pro-table/es/components/EditableTable';

import { ButtonProps, TablePaginationConfig } from 'antd';
import { SizeType } from 'antd/es/config-provider/SizeContext';
import { SortOrder, TableLocale, TableRowSelection } from 'antd/es/table/interface';
import { GetRowKey } from 'rc-table/es/interface';
import { Fragment, ReactNode, Ref } from 'react';

type EditTableProps<T, D> = {
  headerTitle?: string | ReactNode | any;
  editableFormRef?: Ref<EditableFormInstance>;
  rowKey?: string | GetRowKey<any> | undefined;
  recordCreatorProps?:
    | (RecordCreatorProps<any> &
        ButtonProps & {
          creatorButtonText?: ReactNode;
        })
    | false;
  maxLength?: number;
  toolBarRender?: false | any;
  request?: (
    params: D & {
      pageSize?: number;
      current?: number;
      keyword?: string;
    },
    sort: Record<string, SortOrder>,
    filter: Record<string, (string | number)[] | null>,
  ) => Promise<Partial<RequestData<T>>>;
  columns?: ProColumns<any, any>[] | undefined;
  rowSelection?: false | TableRowSelection<any> | undefined;
  editable?: RowEditableConfig<T>;
  className?: string;
  scroll?: any;
  bordered?: boolean;
  pagination?: false | TablePaginationConfig | undefined;
  dataSource?: readonly any[] | undefined;
  loading?: boolean;
  rowClassName?: string;
  size?: SizeType;
  showSorterTooltip?: boolean;
  onChange?: (value: readonly T[]) => void;
  isPagination?: boolean;
  totalPagination?: number;
  currentPagination?: number;
  onChangePagination?: ((page: number, pageSize: number) => void) | undefined;
  pageSizeOptions?: string[];
  pageSizePagination?: number;
  classNamePagination?: string;
  locale?: TableLocale | undefined;
  justify?: 'center' | 'end' | 'start' | 'space-around' | 'space-between' | 'space-evenly';

  [key: string]: any;
};

const EditTable = <T extends Record<string, any>, D extends Record<string, any>>({
  headerTitle,
  rowKey,
  maxLength,
  scroll,
  loading,
  recordCreatorProps,
  columns,
  request,
  onChange,
  editable,
  value,
  ...props
}: EditTableProps<T, D>) => {
  return (
    <Fragment>
      <EditableProTable<T, D>
        headerTitle={headerTitle}
        maxLength={maxLength}
        columns={columns}
        request={request}
        value={value}
        onChange={onChange}
        scroll={scroll || { x: 960 }}
        recordCreatorProps={recordCreatorProps}
        rowKey={rowKey}
        editable={editable}
        loading={loading}
        {...props}
      />
    </Fragment>
  );
};

export default EditTable;
