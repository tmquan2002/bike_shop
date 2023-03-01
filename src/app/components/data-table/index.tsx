import { useEffect, useState } from "react";
import { Pagination, PaginationProps, Table } from "semantic-ui-react";

export interface ColumnType<T, K extends keyof T> {
    key: K;
    header: string;
    width?: number;
}

interface TableProps<T, K extends keyof T> {
    data: Array<T>;
    columns: Array<ColumnType<T, K>>;
    pagination?: boolean;
}

const DataTable = <T, K extends keyof T>({ data, columns, pagination }: TableProps<T, K>): JSX.Element => {
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [pageData, setPageData] = useState(data)
    const pageSize = 10;

    const totalItems = data.length;
    const totalPages = Math.ceil(totalItems / pageSize)

    const handlePageChange = (event: React.MouseEvent<HTMLAnchorElement>, data: PaginationProps) => {
        setCurrentPage(data.activePage as number)
    }

    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;

    useEffect(() => {
        setPageData(pagination ? data.slice(startIndex, endIndex) : data);
    }, [currentPage, data, pagination, endIndex, startIndex]);

    return (
        <>
            <Table basic='very'>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>#</Table.HeaderCell>
                        {columns.map((c, index) => (
                            <Table.HeaderCell key={index}>{c.header}</Table.HeaderCell>
                        ))}
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {pageData.map((d, index) => (
                        <Table.Row key={index}>
                            <Table.Cell>{index + startIndex + 1}</Table.Cell>
                            {columns.map((c, index2) => (
                                <Table.Cell key={index2}>{d[c.key] as React.ReactNode}</Table.Cell>
                            ))}
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table>
            {pagination && totalPages !== 1 &&
                <Pagination totalPages={totalPages} activePage={currentPage} onPageChange={handlePageChange} pointing secondary />
            }
        </>
    )
}

export default DataTable