import './styles.css';
const ArrayHours = [
	{
		hours: '09:00 hr',
		scheduled: true
	},
	{
		hours: '10:00 hr',
		scheduled: false
	},
	{
		hours: '11:00 hr',
		scheduled: true
	},
	{
		hours: '12:00 hr',
		scheduled: true
	},
	{
		hours: '13:00 hr',
		scheduled: true
	},
	{
		hours: '14:00 hr',
		scheduled: false
	}
]

function SelectHours() {

	const handleClick = (elements) => {
		console.log(elements)
	}
	const handleClickScheduled = () => {
		alert('Esse horário já está')
	}
	return (
		<div className="body_SelectHours">

			<p id='select_hoursTitle'>Horário</p>

			{
				ArrayHours.map(elements => (
					elements.scheduled === true ?
						<button type='button' id='select_hours' key={elements.hours} onClick={() => handleClick(elements.hours)}  >
							{elements.hours}
						</button>
						:
						<button type='button' id='select_hours_scheduled' disabled key={elements.hours} onClick={() => handleClickScheduled()}  >
							{elements.hours}
						</button>

				))
			}

		</div>
	);
}

export default SelectHours;
