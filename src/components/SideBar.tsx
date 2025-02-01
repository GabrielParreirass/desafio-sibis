const SideBar = ({
  valueTableTitle,
  onChangeTableTitle,
  focusedColumn,
  valueColumnTitle,
  onChangeColumnTitle,
}: any) => {

  
  return (
    <div className="bg-gray-300 w-[25vw] h-[100vh]">
      <div className="border-b-2 border-gray-200 p-3">
        <div className="mb-2">Table Title</div>
        <div>
          <input
            type="text"
            name="TableTitle"
            id=""
            placeholder="Table title"
            className="bg-white rounded-md p-2"
            value={valueTableTitle}
            onChange={onChangeTableTitle}
          />
        </div>
      </div>

      <div className="border-b-2 border-gray-200 p-3">
        <div className="mb-2">Column Header {focusedColumn} </div>
        <div>
          <input
            type="text"
            name="ColumnHeader"
            id=""
            placeholder="Column Header"
            className="bg-white rounded-md p-2"
            value={valueColumnTitle}
            onChange={onChangeColumnTitle}
          />
        </div>
      </div>
    </div>
  );
};

export default SideBar;
