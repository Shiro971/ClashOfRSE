import React from "react";

// Tableau des données ajustées avec un maximum de 500 visiteurs
const data = [
  { name: "Lina", visitors: 150 },
  { name: "Bernard", visitors: 480 },
  { name: "Alice", visitors: 400 },
  { name: "Joe", visitors: 300 },
  { name: "Sarah", visitors: 250 },
  { name: "Patrick", visitors: 200 },
  { name: "Nina", visitors: 180 },
];

export default function Top5Ranking() {
  // Fixer le maximum à 500
  const maxVisitors = 500;

  // Ajouter dynamiquement la progression au tableau
  const dataWithProgress = data.map((item) => ({
    ...item,
    progress: Math.round((item.visitors / maxVisitors) * 100), // Proportion en pourcentage
  }));

  // Trier les données par nombre de visiteurs (décroissant) et limiter à top 5
  const top5Data = [...dataWithProgress].sort((a, b) => b.visitors - a.visitors).slice(0, 5);

  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3 className="font-semibold text-base text-blueGray-700">
                Classement RSE
              </h3>
            </div>
            <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
              
            </div>
          </div>
        </div>
        <div className="block w-full overflow-x-auto">
          {/* Projects table */}
          <table className="items-center w-full bg-transparent border-collapse">
            <thead className="thead-light">
              <tr>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Nom
                </th>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Total
                </th>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left min-w-140-px"></th>
              </tr>
            </thead>
            <tbody>
              {top5Data.map((item, index) => (
                <tr key={index}>
                  <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                    {item.name}
                  </th>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    {item.visitors.toLocaleString()}
                  </td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    <div className="flex items-center">
                      <span className="mr-2">{item.progress}%</span>
                      <div className="relative w-full">
                        <div className="overflow-hidden h-2 text-xs flex rounded bg-red-200">
                          <div
                            style={{ width: `${item.progress}%` }}
                            className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center 
                              ${item.progress >= 70 ? 'bg-emerald-500' : 
                               item.progress >= 50 ? 'bg-lightBlue-500' : 'bg-red-500'}`}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
