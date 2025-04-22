import {useState} from "react";

interface ResultComponentProps {
    msg:string,
    closeFn: () => void
}

export default function ResultComponent({msg, closeFn } :ResultComponentProps ) {

    const [showFlag, setShowFlag] = useState(msg && true)

    function getMsg() {
        if(msg === 'D'){
            return 'DELETED............'
        }else if(msg === 'M'){
            return 'MODIFIED...........'
        }else {
            return msg
        }
    }

    if (!showFlag) return null;

    return (
        // <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
        //      style={{ backgroundColor: 'rgba(169, 169, 169, 0.7)' }}
        //      onClick={() => {
        //          setShowFlag(false)
        //          closeFn()
        //      }}
        // >
        //     <div className="bg-green-500 p-6 rounded-lg shadow-lg">
        //         <p className="text-lg font-semibold text-gray-700">{getMsg()}</p>
        //     </div>
        // </div>

        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
             style={{ backgroundColor: 'rgba(169, 169, 169, 0.7)' }}
             onClick={() => {
                 setShowFlag(false)
                 closeFn()
             }}
        >
            <div className="bg-white rounded-2xl p-6 shadow-xl w-72 text-center space-y-4">
                {/* 체크 아이콘 */}
                <div className="flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                    {/* 메시지 */}
                    <p className="text-lg font-semibold">{getMsg()}</p>

                    <svg
                    className="w-8 h-8 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={3}
                    viewBox="0 0 24 24"
                    >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                    />
                    </svg>
                </div>
                </div>


                {/* 닫기 버튼 */}
                {/* <button
                onClick={closeFn}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                >
                확인
                </button> */}
            </div>
        </div>
    );
}
