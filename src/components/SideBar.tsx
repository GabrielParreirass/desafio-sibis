import { FaLock } from "react-icons/fa";
const SideBar = ({
  valueTableTitle,
  onChangeTableTitle,
  focusedColumn,
  valueColumnTitle,
  onChangeColumnTitle,
  previewMode,
}: any) => {
  return (
    <>
      {previewMode == true ? (
        <div className="bg-gray-300 lg:w-[25vw] lg:h-[100vh] flex flex-col items-center justify-center lg:justify-normal">
          <div className="border-b-2 border-gray-200 p-3 w-full flex flex-col items-center lg:items-start">
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

          <div className="border-b-2 border-gray-200 p-3 w-full flex flex-col items-center lg:items-start">
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
      ) : (
        <div className="bg-gray-300 lg:w-[25vw] lg:h-[100vh] flex flex-col items-center justify-center lg:justify-normal">
        <div className="border-b-2 border-gray-200 p-3 w-full flex flex-col items-center lg:items-start">
          <div className="mb-2 flex justify-center items-center gap-4">Table Title <FaLock /></div>
          <div>
            <input
              type="text"
              name="TableTitle"
              id=""
              placeholder={valueTableTitle}
              className="bg-gray-400 rounded-md p-2"
              value={""}
              onChange={()=>{}}
              
            />
          </div>
        </div>

        <div className="border-b-2 border-gray-200 p-3 w-full flex flex-col items-center lg:items-start">
          <div className="mb-2 flex justify-center items-center gap-4">Column Header {focusedColumn} <FaLock /></div>
          <div>
            <input
              type="text"
              name="ColumnHeader"
              id=""
              placeholder="Column Header"
              className="bg-gray-400 rounded-md p-2"
              value={""}
              onChange={()=>{}}
            />
          </div>
        </div>
      </div>
      )}
    </>
  );
};

export default SideBar;
