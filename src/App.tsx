import { useState } from "react";
import Table from "./components/Table";
import SideBar from "./components/SideBar";

function App() {
  const [tableTitle, setTableTitle] = useState("Table Title");
  const [focusedColumn, setFocusedColumn] = useState(0);
  const [columnTitle, setColumnTitle] = useState("");
  const [columns, setColumns] = useState([{ id: 1, name: " Column 1" }]);
  const [previewStatus, setPreviewStatus] = useState("false");

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

  const handleChangePreview = () => {
    if (previewStatus == "false") {
      setPreviewStatus("true");
    } else {
      setPreviewStatus("false");
    }
    console.log(previewStatus);
  };

  return (
    <div className="lg:flex-row flex flex-col-reverse justify-between h-full">
      <Table
        columns={columns}
        setColumns={setColumns}
        tableTitle={tableTitle}
        onClickColumn={alertTable}
        valueColumnTitle={columnTitle}
        previewStatus={previewStatus}
        onChangePreview={handleChangePreview}
      />

      {previewStatus == "true" ? (
        <SideBar
          valueTableTitle={tableTitle}
          onChangeTableTitle={handleChange}
          focusedColumn={focusedColumn}
          valueColumnTitle={columnTitle}
          onChangeColumnTitle={handleChangeColumnTitle}
          previewMode={false}
        />
      ) : (
        <SideBar
          valueTableTitle={tableTitle}
          onChangeTableTitle={handleChange}
          focusedColumn={focusedColumn}
          valueColumnTitle={columnTitle}
          onChangeColumnTitle={handleChangeColumnTitle}
          previewMode={true}
        />
      )}
    </div>
  );
}

export default App;
