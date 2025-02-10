import React from 'react';
import db from './lib/db';

const Page = () => {
    const tableHeaders = Object.keys(db.posts[0]); 

    return (
        <div className="container mx-auto p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Blog Posts</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
                    <thead className="bg-gray-800 text-white">
                        <tr>
                            {tableHeaders.map((header, index) => (
                                <th key={index} className="py-3 px-6 text-left uppercase">
                                    {header}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {db.posts.map((post, index) => (
                            <tr key={post.id} className={`border-b ${index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}`}>
                                {tableHeaders.map((header, idx) => (
                                    <td key={idx} className="py-2 px-6 text-gray-700">
                                        {post[header]}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Page;
