const renderTransaction = (transaction) => {
	$(`
		<li class="card transaction text-white bg-${transaction.type === 'debit' ? 'danger' : 'success'}">
			<div class="card-header resume">
				<h2>
					${transaction.type === 'debit' ? '-' : '+'}$${transaction.ammount}
				</h2>
			</div>
			<ul class="card-body detail hide">
				<li class="id">
					<span class="label">
						ID:
					</span>
					<span class="value">
						${transaction.id}
					</span>
				</li>
				<li class="id">
					<span class="label">
						Type:
					</span>
					<span class="value">
						${transaction.type}
					</span>
				</li>

				<li class="id">
					<span class="label">
						Ammount:
					</span>
					<span class="value">
						$${transaction.ammount}
					</span>
				</li>

				<li class="id">
					<span class="label">
						Date:
					</span>
					<span class="value">
						${transaction.effectiveDate}
					</span>
				</li>
			</ul>
		<li>
	`)
		.click(e => showTransaction($(e.currentTarget)))
		.appendTo('#transactions')
}

const showTransaction = ($transaction) => {
	$('#transactions .detail')
		.addClass('hide')
	;
	$transaction.find('.detail')
		.removeClass('hide')
	;
};

fetch('http://localhost:3000/api/transactions', {
	method: 'get'
})
	.then(respose => respose.json())
	.then(({transactions}) => {
		transactions.forEach(renderTransaction);
	})
	.catch(console.error)
;