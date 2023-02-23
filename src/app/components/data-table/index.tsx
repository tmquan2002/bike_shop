import { Table } from "semantic-ui-react";

export type ColumnType<T, K extends keyof T> = {
    key: K;
    header: string;
    width?: number;
}

type TableProps<T, K extends keyof T> = {
    data: Array<T>;
    columns: Array<ColumnType<T, K>>;
}

const DataTable = <T, K extends keyof T>({ data, columns }: TableProps<T, K>): JSX.Element => {
    return (
        <>
            <Table celled padded>
                <Table.Header>
                    <Table.Row>
                        {columns.map((c, index) => (
                            <Table.HeaderCell key={index}>{c.header}</Table.HeaderCell>
                        ))}
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {data.map((d, index) => (
                        <Table.Row key={index}>
                            {columns.map((c, index2) => (
                                <Table.Cell key={index2}>{JSON.stringify(d[c.key])}</Table.Cell>
                            ))}
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table>
        </>
    )
}

export default DataTable