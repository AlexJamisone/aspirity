export default function TabelHeader() {
	return (
		<thead className="text-nowrap text-left text-base text-secondary-txt">
			<tr>
				<th scope="col" className="py-4 pl-2">
					Тип
				</th>
				<th scope="col" className="py-4 pl-2">
					Дата отпуска
				</th>
				<th scope="col" className="py-4 pl-2 text-right">
					Количестов дней
				</th>
			</tr>
		</thead>
	);
}
