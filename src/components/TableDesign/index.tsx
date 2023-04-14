import EditTable from '@/components/TableDesign/components/EditableTable';
import Table from '@/components/TableDesign/components/Table';
import { TableDesignProps } from '@/components/TableDesign/typings';
import { TYPE_TABLE } from '@/constants/type';
import classNames from 'classnames';
import style from './index.less';

const TableDesign = <T extends Record<string, any>, D extends Record<string, any>>({
  customComponent,
  totalPagination,
  typeTable,
  columns,
  dataSource,
  pageSizePagination,
  currentPagination,
  loading,
  onChangePagination,
  onChange,
  onChangeEditTable,
  rowSelection,
  rowKey,
  ...props
}: TableDesignProps<T, D>) => {
  let tableRender = customComponent;

  switch (typeTable) {
    case TYPE_TABLE.TABLE:
      tableRender = (
        <Table<T, D>
          totalPagination={totalPagination}
          columns={columns}
          dataSource={dataSource}
          pageSizePagination={pageSizePagination}
          currentPagination={currentPagination}
          loading={loading}
          rowSelection={rowSelection}
          onChangePagination={onChangePagination}
          onChange={onChange}
          rowKey={rowKey}
          {...props}
        />
      );
      break;
    case TYPE_TABLE.EDIT_TABLE:
      tableRender = (
        <EditTable<T, D>
          columns={columns}
          loading={loading}
          rowSelection={rowSelection}
          onChange={onChangeEditTable}
          rowKey={rowKey}
          {...props}
        />
      );
      break;
    default:
      tableRender = (
        <Table<T, D>
          totalPagination={totalPagination}
          columns={columns}
          dataSource={dataSource}
          pageSizePagination={pageSizePagination}
          currentPagination={currentPagination}
          loading={loading}
          onChangePagination={onChangePagination}
          rowSelection={rowSelection}
          onChange={onChange}
          rowKey={rowKey}
          {...props}
        />
      );
      break;
  }

  return <div className={classNames(style.table)}>{tableRender}</div>;
};

export default TableDesign;
