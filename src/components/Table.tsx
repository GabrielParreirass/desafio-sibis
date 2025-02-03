import { useEffect, useState } from "react";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

const Table = ({ columns, setColumns, tableTitle, onClickColumn, previewStatus, onChangePreview }: any) => {
  const [focosColumn, setFocusColumn] = useState(0);
  const [fakeData, setData] = useState<any>({first_name:'Jhon Doe'})

  const addColumn = () => {
    if(columns.length < 10){
      setColumns([
        ...columns,
        { id: columns.length + 1, name: `Column ${columns.length + 1}` },
      ]);
    }else{
      window.alert("Numero maximo de colunas atingido!")
    }
    
  };
  const toggleFocus = (i: { id: number; name: string }) => {
    setFocusColumn(focosColumn === i.id ? 0 : i.id);
    if (focosColumn === i.id) {
      onClickColumn(0);
    } else {
      onClickColumn(i);
    }
  };
  const handlePositionLeft = (index: number) => {
    if (index == 0) return;
    const newColumns = [...columns];
    [newColumns[index], newColumns[index - 1]] = [
      newColumns[index - 1],
      newColumns[index],
    ];
    setColumns(newColumns);
  };
  const handlePositionRight = (index: number) => {
    if (index == columns.length - 1) return;
    const newColumns = [...columns];
    [newColumns[index], newColumns[index + 1]] = [
      newColumns[index + 1],
      newColumns[index],
    ];
    setColumns(newColumns);
  };
  useEffect(() =>{
    const fetchData = async () =>{
      const response = await fetch('https://random-data-api.com/api/v2/users?size=10')
      const formatedData = await response.json()
      setData(formatedData)
      
    }
    fetchData()
  }, [])

  return (
    <div className=" lg:w-[75vw] flex flex-col justify-center items-center gap-10 bg-gray-100 ">
      <label className="inline-flex items-center cursor-pointer">
        <span className="me-3 text-sm font-medium text-gray-900">
          Preview Mode
        </span>
        <input
          type="checkbox"
          value={previewStatus}
          className="sr-only peer"
          onChange={onChangePreview}
        />
        <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none  rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full  after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600 dark:peer-checked:bg-green-400"></div>
      </label>

      {previewStatus == "true" ? (
        <div className=" w-fit bg-gray-200 rounded-md">
          <div className="bg-white w-full p-2 rounded-t-md">{tableTitle}</div>
          <div className="flex flex-col xl:flex-row justify-between items-center w-fit p-2 gap-4">
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-1">
              {columns.map((i: { id: number; name: string }, index: any) => (
                <div
                  key={i.id}
                  id={i.id.toString()}
                  className={` h-40 w-60 flex flex-col items-center justify-center z-0 ${
                    focosColumn === i.id ? "bg-white" : "bg-white"
                  }`}
                >
                  <div
                    className={`flex  w-full p-2 items-center justify-between ${
                      focosColumn === i.id ? "bg-gray-300" : "bg-gray-300"
                    }`}
                  >
                    <div className=" ">{i.name}</div>
                    
                  </div>
                  <div
                    className="w-full h-full hover:cursor-pointer"
                  >
                    <div>{fakeData[index].first_name} {fakeData[index].last_name}</div>
                    <div>{fakeData[index].date_of_birth}</div>
                  </div>
                </div>
              ))}
            </div>
            
          </div>
        </div>
      ) : (
        <div className=" w-fit bg-gray-200 rounded-md">
          <div className="bg-white w-full p-2 rounded-t-md">{tableTitle}</div>
          <div className="flex flex-col xl:flex-row justify-between items-center w-fit p-2 gap-4">
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-1">
              {columns.map((i: { id: number; name: string }, index: any) => (
                <div
                  key={i.id}
                  id={i.id.toString()}
                  className={` h-40 w-60 flex flex-col items-center justify-center z-0 ${
                    focosColumn === i.id ? "bg-blue-200" : "bg-white"
                  }`}
                >
                  <div
                    className={`flex  w-full p-2 items-center justify-between ${
                      focosColumn === i.id ? "bg-blue-300" : "bg-gray-300"
                    }`}
                  >
                    <div className=" ">{i.name}</div>
                    <div className="flex gap-2">
                      <div
                        onClick={() => handlePositionLeft(index)}
                        className="z-50 hover:cursor-pointer"
                      >
                        <FaArrowAltCircleLeft />
                      </div>
                      <div
                        onClick={() => handlePositionRight(index)}
                        className="hover:cursor-pointer"
                      >
                        <FaArrowAltCircleRight />
                      </div>
                    </div>
                  </div>
                  <div
                    className="w-full h-full hover:cursor-pointer"
                    onClick={() => toggleFocus(i)}
                  >
                    ...
                  </div>
                </div>
              ))}
            </div>
            <div>
              <button
                onClick={() => {
                  addColumn();
                }}
                className="bg-gray-400 h-40 flex items-center justify-center p-2 rounded-md font-bold hover:text-white duration-175 hover:cursor-pointer z-50"
              >
                Add column +
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Table;
