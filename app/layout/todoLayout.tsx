import { Link, Outlet } from "react-router";
import { useState, useRef, useEffect } from "react";

export default function TodoLayout() {

    // 사용자 변환
    const [userMenuOpen, setUserMenuOpen] = useState(false);
    const [currentUser, setCurrentUser] = useState("사용자1");
    const dropdownRef = useRef<HTMLDivElement>(null);

    const users = ["사용자1", "사용자2", "사용자3"];

    // 외부 클릭 감지
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node)
            ) {
                setUserMenuOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="min-h-screen bg-neutral-100">
            <header className="bg-white shadow-sm">
                <div className="max-w-4xl mx-auto px-4 py-4 flex justify-between items-center">
                    <h1 className="text-lg sm:text-2xl font-bold text-gray-800">
                        📝 Todo App
                    </h1>

                    <div className="flex items-center gap-2">
                        <Link
                            to="/todo/list"
                            className="px-3 py-2 text-sm sm:text-base bg-gray-100 hover:bg-gray-200 rounded-md transition-colors whitespace-nowrap min-w-[90px] text-center"
                        >
                            <span className="hidden sm:inline">📋 Todo List</span>
                            <span className="inline sm:hidden">📋</span>
                        </Link>

                        <Link
                            to="/todo/add"
                            className="px-3 py-2 text-sm sm:text-base bg-gray-100 rounded-md hover:bg-gray-200 transition-colors whitespace-nowrap min-w-[90px] text-center"
                        >
                            <span className="hidden sm:inline">➕ Add Todo</span>
                            <span className="inline sm:hidden">➕</span>
                        </Link>

                        {/* 👤 사용자 변경 버튼 */}
                        <div className="relative" ref={dropdownRef}>
                            <button
                                onClick={() => setUserMenuOpen(!userMenuOpen)}
                                className="px-3 py-2 text-sm sm:text-base bg-gray-100 rounded-md hover:bg-gray-300 transition-colors"
                            >
                                👤 {currentUser}
                            </button>

                            {userMenuOpen && (
                                <ul className="absolute right-0 mt-2 w-32 bg-white border border-gray-200 rounded-md shadow-md z-10">
                                    {users.map((user) => (
                                        <li
                                            key={user}
                                            onClick={() => {
                                                setCurrentUser(user);
                                                setUserMenuOpen(false);
                                            }}
                                            className="px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer"
                                        >
                                            {user}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </div>
                </div>
            </header>

            <main className="max-w-4xl mx-auto px-4 py-6">
                <Outlet />
            </main>
        </div>
    );
}
