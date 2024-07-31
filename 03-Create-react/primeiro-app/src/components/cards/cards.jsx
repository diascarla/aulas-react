import Card from "../card/card"

const cardsTitle = ['Título card 1', 'Título card 2', 'Título card 3']

const showCardColor = () => {
    console.log('Clicou')
}

const Cards = () => {
    return (
        <div>
            <h2>Meus cards</h2>

            <div>
                {cardsTitle.map((cardsTitle, index) => {
                    <Card key={cardsTitle} showCardColor={showCardColor}>
                        <h3>{Cards}</h3>
                        <p>esse é o texto do card 1</p>
                    </Card>
                })
                }

                <Card color = 'blue' showCardColor={showCardColor}>
                    <h3>Card com fundo azul</h3>
                    <p>esse é o texto do card 1</p>
                </Card>

            </div>
        </div>
    )
}

export default Cards