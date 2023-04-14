import ButtonDesign from '@/components/ButtonDesign';
import DividerDesign from '@/components/DividerDesign';
import NumberFormatDesign from '@/components/NumberFormatDesign';
import TableDesign from '@/components/TableDesign';
import TypographyDesign from '@/components/TypographyDesign';
import { TYPE_TABLE, TYPE_TYPOGRAPHY } from '@/constants/type';
import type { ProColumns } from '@ant-design/pro-components';
import { PageContainer, ProFormRadio } from '@ant-design/pro-components';
import React, { useState } from 'react';

const waitTime = (time: number = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

type DataSourceType = {
  id: React.Key;
  title?: string;
  readonly?: string;
  decs?: string;
  state?: string;
  created_at?: string;
  update_at?: string;
  children?: DataSourceType[];
};

const defaultData: DataSourceType[] = [
  {
    id: 624748504,
    title: 'Activity Name One',
    readonly: 'Activity Name One',
    decs: 'This activity is so fun',
    state: 'open',
    created_at: '1590486176000',
    update_at: '1590486176000',
  },
  {
    id: 624691229,
    title: 'Activity Name II',
    readonly: 'Activity Name II',
    decs: 'This activity is so fun',
    state: 'closed',
    created_at: '1590481162000',
    update_at: '1590481162000',
  },
];

const Welcome: React.FC = () => {
  const [editableKeys, setEditableRowKeys] = useState<React.Key[]>([]);
  const [dataSource, setDataSource] = useState<readonly DataSourceType[]>([]);
  const [position, setPosition] = useState<'top' | 'bottom' | 'hidden'>('bottom');

  const columns: ProColumns<DataSourceType>[] = [
    {
      title: 'Event name',
      dataIndex: 'title',
      tooltip: 'Only read, use Form.getFieldValue',
      formItemProps: (form, { rowIndex }) => {
        return {
          rules: rowIndex > 1 ? [{ required: true, message: 'This is required' }] : [],
        };
      },

      editable: (text, record, index) => {
        return index !== 0;
      },
      width: '15%',
    },
    {
      title: 'Activity Name',
      dataIndex: 'readonly',
      tooltip: 'Read only, use Form.getFieldValue',
      readonly: true,
      width: '15%',
    },
    {
      title: 'state',
      key: 'state',
      dataIndex: 'state',
      valueType: 'select',
      valueEnum: {
        all: { text: 'all', status: 'Default' },
        open: {
          text: 'unsolved',
          status: 'Error',
        },
        closed: {
          text: 'solved',
          status: 'Success',
        },
      },
    },
    {
      title: 'describe',
      dataIndex: 'decs',
      fieldProps: (form, { rowKey, rowIndex }) => {
        if (form.getFieldValue([rowKey || '', 'title']) === 'Is not fun') {
          return {
            disabled: true,
          };
        }
        if (rowIndex > 9) {
          return {
            disabled: true,
          };
        }
        return {};
      },
    },
    {
      title: 'Activity time',
      dataIndex: 'created_at',
      valueType: 'date',
    },
    {
      title: 'operate',
      valueType: 'option',
      width: 200,
      render: (text, record, _, action) => [
        <a
          key="editable"
          onClick={() => {
            action?.startEditable?.(record.id);
          }}
        >
          edit
        </a>,
        <a
          key="delete"
          onClick={() => {
            setDataSource(dataSource.filter((item) => item.id !== record.id));
          }}
        >
          delete
        </a>,
      ],
    },
  ];

  return (
    <PageContainer>
      <ButtonDesign type={'dashed'} text={'button'} />

      <DividerDesign />

      <TypographyDesign
        typeTypography={TYPE_TYPOGRAPHY.TEXT_SUFFIX}
        text={
          'Ant Design, a design language for background applications, is refined by Ant UED Team. Ant Design, a design language for background application'
        }
        isShorten={true}
        editing={false}
      />
      <DividerDesign />
      <TypographyDesign
        typeTypography={TYPE_TYPOGRAPHY.TEXT_ELLIPSIS}
        text={
          'Ant Design, a design language for background applications, is refined by Ant UED Team. Ant Design, a design language for background application'
        }
        isShorten={true}
      />

      <DividerDesign />
      <TypographyDesign
        typeTypography={TYPE_TYPOGRAPHY.TEXT_EXPAND}
        text={
          'Ant Design, a design language for background applications, is refined by Ant UED Team. Ant Design, a design language for background applications, is refined by Ant UED Team. Ant Design, a design language for background applications, is refined by Ant UED Team. Ant Design, a design language for background applications, is refined by Ant UED Team. Ant Design, a design language for background applications, is refined by Ant UED Team. Ant Design, a design language for background applications, is refined by Ant UED Team.'
        }
      />
      <DividerDesign />
      <NumberFormatDesign value={9999999} />
      <DividerDesign />
      <TableDesign<DataSourceType, any>
        typeTable={TYPE_TABLE.EDIT_TABLE}
        rowKey="id"
        headerTitle="Editable table"
        maxLength={5}
        scroll={{
          x: 960,
        }}
        recordCreatorProps={
          position !== 'hidden'
            ? {
                position: position as 'top',
                record: () => ({ id: (Math.random() * 1000000).toFixed(0) }),
              }
            : false
        }
        loading={false}
        toolBarRender={() => [
          <ProFormRadio.Group
            key="render"
            fieldProps={{
              value: position,
              onChange: (e) => setPosition(e.target.value),
            }}
            options={[
              {
                label: 'Add to the top',
                value: 'top',
              },
              {
                label: 'Add to the bottom',
                value: 'bottom',
              },
              {
                label: 'hide',
                value: 'hidden',
              },
            ]}
          />,
        ]}
        columns={columns}
        request={async () => ({
          data: defaultData,
          total: 3,
          success: true,
        })}
        value={dataSource}
        onChangeEditTable={setDataSource}
        editable={{
          type: 'multiple',
          editableKeys,
          onSave: async (rowKey: any, data: any, row: any) => {
            console.log(rowKey, data, row);
            await waitTime(2000);
          },
          onChange: setEditableRowKeys,
        }}
      />
    </PageContainer>
  );
};

export default Welcome;
