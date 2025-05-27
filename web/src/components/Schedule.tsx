import React from "react";
import {
    useReactTable,
    getCoreRowModel,
    flexRender,
} from "@tanstack/react-table";

type ScheduleItem = {
    time: string;
    [key: string]: string; // Allow dynamic day columns
};

type ScheduleProps = {
    data: ScheduleItem[];
    days: string[]; // e.g. ["Day 1", "Day 2", "Day 3"]
};

const Schedule: React.FC<ScheduleProps> = ({ data, days }) => {
    // Split data by day
    const dayTables = days.map((day, idx) => {
        const dayKey = `day${idx + 1}`;
        // Only show the table if there is data for this day
        const filteredData = data
            .filter(row => row[dayKey] && row[dayKey].trim() !== "")
            .map(row => ({
                time: row.time,
                kegiatan: row[dayKey]
            }));
        if (filteredData.length === 0) return null;
        // Columns: Time + Kegiatan (always use 'kegiatan' as accessor)
        const columns = [
            {
                accessorKey: "time",
                header: "Waktu",
                cell: (info: any) => info.getValue(),
            },
            {
                accessorKey: "kegiatan",
                header: "Kegiatan",
                cell: (info: any) => info.getValue(),
            },
        ];
        const table = useReactTable({
            data: filteredData,
            columns,
            getCoreRowModel: getCoreRowModel(),
        });
        return (
            <div key={day} className="w-full p-2 md:p-4">
                <h3 className="text-center font-bold text-lg md:text-2xl mb-2 mt-4 md:mt-0">{day}</h3>
                <div className="overflow-x-auto">
                    <table className="min-w-full border-collapse">
                        <thead>
                            {table.getHeaderGroups().map(headerGroup => (
                                <tr key={headerGroup.id}>
                                    {headerGroup.headers.map((header, i) => (
                                        <th
                                            key={header.id}
                                            className={
                                                `bg-lime-500 text-white px-4 py-2 text-center text-sm md:text-base` +
                                                (i === 0 || i === 1 ? ' border-2 border-gray-800/50' : '')
                                            }
                                            colSpan={header.colSpan}
                                        >
                                            {flexRender(header.column.columnDef.header, header.getContext())}
                                        </th>
                                    ))}
                                </tr>
                            ))}
                        </thead>
                        <tbody>
                            {table.getRowModel().rows.map(row => (
                                <tr key={row.id} className="even:bg-gray-50">
                                    {row.getVisibleCells().map((cell, i) => (
                                        <td
                                            key={cell.id}
                                            className={
                                                `px-4 py-2 text-xs md:text-sm whitespace-nowrap text-center` +
                                                (i === 0 || i === 1 ? ' border-2 border-gray-800/50' : '')
                                            }
                                        >
                                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    });
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0.5 md:gap-6 w-full">
            {dayTables}
        </div>
    );
};

export default Schedule;
