import { TABLE } from '@/constants/table';
import { ActionType, ProColumns } from '@ant-design/pro-components';
import ProTable from '@ant-design/pro-table';
import { SearchConfig } from '@ant-design/pro-table/es/components/Form/FormRender';
import { Pagination, Row, TablePaginationConfig } from 'antd';
import { SizeType } from 'antd/es/config-provider/SizeContext';
import {
  FilterValue,
  SorterResult,
  TableCurrentDataSource,
  TableLocale,
  TableRowSelection,
} from 'antd/es/table/interface';
import classNames from 'classnames';
import { GetRowKey } from 'rc-table/es/interface';
import { Fragment, ReactNode, Ref } from 'react';

type TableProps = {
  headerTitle?: string | ReactNode;
  actionRef?: Ref<ActionType | undefined> | undefined;
  rowKey?: string | GetRowKey<any> | undefined;
  search?: false | SearchConfig | undefined;
  toolBarRender?: false | any;
  request?: any;
  columns?: ProColumns<any, any>[] | undefined;
  rowSelection?: false | TableRowSelection<any> | undefined;
  className?: string;
  scroll?: any;
  bordered?: boolean;
  pagination?: false | TablePaginationConfig | undefined;
  dataSource?: readonly any[] | undefined;
  loading?: boolean;
  rowClassName?: string;
  size?: SizeType;
  showSorterTooltip?: boolean;
  onChange?: (
    pagination: TablePaginationConfig,
    filters: Record<string, FilterValue | null>,
    sorter: SorterResult<any> | SorterResult<any>[],
    extra: TableCurrentDataSource<any>,
  ) => void;
  isPagination?: boolean;
  sizePagination?: 'small' | 'default' | undefined;
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

const Table = <T extends Record<string, any>, D extends Record<string, any>>({
  headerTitle,
  actionRef,
  rowKey,
  search = false,
  toolBarRender = false,
  request,
  columns,
  rowSelection = false,
  className,
  scroll,
  bordered,
  pagination = false,
  dataSource,
  loading,
  rowClassName,
  size,
  showSorterTooltip = false,
  onChange,
  isPagination,
  sizePagination = 'default',
  totalPagination = TABLE.TOTAL_PAGINATION,
  currentPagination = TABLE.CURRENT_PAGINATION,
  onChangePagination,
  pageSizeOptions = TABLE.PAGE_SIZE_OPTION,
  pageSizePagination = TABLE.PAGE_SIZE_PAGINATION,
  classNamePagination,
  justify = 'end',
  locale,
  ...props
}: TableProps) => {
  return (
    <Fragment>
      <ProTable<T, D>
        locale={locale}
        headerTitle={headerTitle}
        actionRef={actionRef}
        search={search}
        rowKey={rowKey}
        toolBarRender={toolBarRender}
        request={request}
        columns={columns}
        pagination={pagination}
        rowSelection={rowSelection}
        dataSource={dataSource}
        className={className}
        scroll={scroll || { x: 960 }}
        bordered={bordered}
        loading={loading}
        rowClassName={rowClassName}
        showSorterTooltip={showSorterTooltip}
        size={size}
        onChange={onChange}
        {...props}
      />

      {isPagination && (
        <Row justify={justify}>
          <Pagination
            className={classNames('pagination', classNamePagination)}
            size={sizePagination}
            total={totalPagination}
            current={currentPagination}
            onChange={onChangePagination}
            pageSizeOptions={pageSizeOptions}
            pageSize={pageSizePagination}
            showSizeChanger
            {...props}
          />
        </Row>
      )}
    </Fragment>
  );
};

export default Table;
