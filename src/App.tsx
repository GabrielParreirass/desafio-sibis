import { useState } from "react";
import Table from "./components/Table";
import SideBar from "./components/SideBar";

function App() {
  const [tableTitle, setTableTitle] = useState("Table Title");
  const [focusedColumn, setFocusedColumn] = useState(0);
  const [columnTitle, setColumnTitle] = useState("");
  const [columns, setColumns] = useState([{ id: 1, name: " Column 1" }]);

  const handleChange = (event: any) => {
    setTableTitle(event?.target.value);
  };

  const alertTable = (i: { id: number; name: string }) => {
    setFocusedColumn(i.id);
    setColumnTitle(i.name);
    console.log(i);
  };

  const handleChangeColumnTitle = (event: any) => {
    setColumnTitle(event?.target.value);
    console.log(columnTitle);
    setColumns(
      columns.map((c) =>
        c.id === focusedColumn ? { ...c, name: columnTitle } : c
      )
    );
  };

  return (
    <div className="flex justify-between h-full">
      <Table
        columns={columns}
        setColumns={setColumns}
        tableTitle={tableTitle}
        onClickColumn={alertTable}
        valueColumnTitle={columnTitle}
      />

      <SideBar
        valueTableTitle={tableTitle}
        onChangeTableTitle={handleChange}
        focusedColumn={focusedColumn}
        valueColumnTitle={columnTitle}
        onChangeColumnTitle={handleChangeColumnTitle}
      />
    </div>
  );
}

export default App;
