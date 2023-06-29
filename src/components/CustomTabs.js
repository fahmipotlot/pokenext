import React from 'react'

function CustomTabs({openTab, data, clas}) {
	const abilities = data?.abilities?.map( ( { ability } ) => {
		return ability.name.replace( '-', ' ' );
	} ).join( ', ' );

	const height = data?.height * 10; // cm
	const weight = data?.weight / 10; // kg

  const stats = data?.stats;
  return (
    <div className={openTab === clas ? "block" : "hidden"}>
      {clas === 1 ? (
        <table className="table">
          <tbody>
            <tr>
              <th>Height</th>
              <td>{height} cm</td>
            </tr>
            <tr>
              <th>Weight</th>
              <td>{weight} kg</td>
            </tr>
            <tr>
              <th>Abilities</th>
              <td className="capitalize">{abilities}</td>
            </tr>
          </tbody>
        </table>
      ) : ""}
      {clas === 2 ? (
        <table className="table">
          <tbody>
            {stats?.map((stat,index) => {
              return (
                <tr key={index}>
                  <th className="capitalize w-1/3">{stat.stat.name.replace(/-/g, " ")}</th>
                  <td>
                    <progress className="progress progress-accent w-2/3" value={stat.base_stat} max="100"></progress>
                    <span>{" "}{stat.base_stat}</span>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      ): ""}
    </div>
  )
}

export default CustomTabs