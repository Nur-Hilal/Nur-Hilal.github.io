

function myselect() {
	return (
		<div>
			<select name="cars" id="cars" value={(e) => { e.target.value }}>
				<option value={0}>Volvo</option>
				<option value={1}>Saab</option>
				<option value={2}>Mercedes</option>
				<option value={3}>Audi</option>
			</select>
		</div>
	);
}
export default myselect;

ReactDOM.render(
    // style={{ textAlign: 'center' }}
    <section style={{ textAlign: 'center' }}>
        <myselect />
    </section>,

    document.getElementById('myselectPage'));
