import React, {FC} from 'react';

interface Column {
    header: string,
    key: string
}

type columns = Column[];

interface Props {
    columns: columns,
    items: [],
}


const DynamicTable: FC<Props> = ({columns, items}) => {
    return (
        <table
            className=
                {
                    "rounded-t-lg  relative transition m-5 mt-2 mb-2 w-full lg:w-5/6 mx-auto bg-gray-200 text-gray-800"
                }
        >
            <thead>
            <tr>
                {columns.map(column => <th
                    className="px-4 capitalize antialiased tracking-wide py-3">{column.header}</th>)}
            </tr>
            </thead>
            <tbody>
            {items.map(item => <DynamicTableRow item={item} columns={columns}/>)}
            </tbody>
        </table>
    );
};

interface RowProps {
    columns: columns,
    item: any
}

const DynamicTableRow: FC<RowProps> = ({item, columns}) => {
    return (
        <tr>
            {
                columns.map(column => <td className="px-4 text-sm truncate w-28 lg:w-44 md:w-44  py-3">{item[column.key]}</td>)
            }
        </tr>
    )
}


export default DynamicTable;
