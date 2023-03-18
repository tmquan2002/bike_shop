import { useEffect, useState } from "react";
import { Dimmer, Loader, Pagination, PaginationProps, Table } from "semantic-ui-react";
import './DataTable.css'

export interface ColumnType<T, K extends keyof T> {
    key: K;
    header: string;
    width?: number;
}

interface TableProps<T, K extends keyof T> {
    /**An array list of your type */
    data: Array<T>;
    /**An array list of your table headers */
    columns: Array<ColumnType<T, K>>;
    /**Title of the table */
    title?: string;
    /**Show pagiantion under the table, assign a number to show numbers of items each pages (default is 10)*/
    pagination?: boolean | number;
    /**Show table with placeholder if data is still loading */
    loading?: boolean;
}

const DataTable = <T, K extends keyof T>({
    data,
    columns,
    pagination,
    loading,
    title
}: TableProps<T, K>): JSX.Element => {


    //Pagination
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [pageData, setPageData] = useState(data)
    const pageSize = typeof pagination === "number" ? pagination : 10;
    const totalItems = data.length;
    const totalPages = Math.ceil(totalItems / pageSize)

    const handlePageChange = (event: React.MouseEvent<HTMLAnchorElement>, data: PaginationProps) => {
        setCurrentPage(data.activePage as number)
    }

    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;

    useEffect(() => {
        setPageData(pagination ? data.slice(startIndex, endIndex) : data)
    }, [currentPage, data, pagination, endIndex, startIndex]);

    return (
        <>
            <Dimmer active={loading} inverted>
                <Loader inverted>Loading</Loader>
            </Dimmer>
            {title && <div className='table-title'>{title}</div>}
            {/* {searchNode} */}
            <Table basic='very'>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>#</Table.HeaderCell>
                        {columns.map((c, index) => (
                            <Table.HeaderCell key={index} textAlign={index === columns.length - 1 ? 'right' : 'left'}>
                                {c.header}
                            </Table.HeaderCell>
                        ))}
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {loading ?
                        <>
                            {[...Array(pageSize)].map((v, index) => (
                                <Table.Row key={index}>
                                    <Table.Cell>{index + startIndex + 1}</Table.Cell>
                                    {[...Array(columns.length)].map((c, index2) => (
                                        <Table.Cell key={index2} />
                                    ))}
                                </Table.Row>
                            )
                            )}
                        </> :
                        <>
                            {pageData.map((d, index) => (
                                <Table.Row key={index}>
                                    <Table.Cell>{index + startIndex + 1}</Table.Cell>
                                    {columns.map((c, index2) => (
                                        <Table.Cell key={index2} textAlign={index2 === columns.length - 1 ? 'right' : 'left'}>
                                            {d[c.key] as React.ReactNode}
                                        </Table.Cell>
                                    ))}
                                </Table.Row>
                            ))}
                        </>
                    }
                </Table.Body>
            </Table>

            {pagination && totalPages !== 1 &&
                <Pagination totalPages={totalPages} activePage={currentPage} onPageChange={handlePageChange} pointing secondary />
            }
        </>
    )
}

export default DataTable