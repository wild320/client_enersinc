import moment from 'moment'
import React from 'react'
import { Badge, Button, Card } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'
import EliminarPersonaButton from './botones/EliminarPersonaButton'

export default function Persona({persona, controlesRender}) {
    return (
        <Card className="margen-t margen-b">
            <Card.Header className="mi-card">
                <div>
                    {persona.jugado ?                             
                        <Badge className="mi-badge-jugado">
                            Jugado
                        </Badge> 
                        :
                        <Badge className="mi-badge-pendiente">
                            Pendiente
                        </Badge>                            
                    }
                </div>
            {controlesRender &&
                <div>
                    <Button 
                        variant="primary" size="sm" className="margen-e"
                        as={NavLink} to={`editarpersona/${persona.personaId}`}
                    >
                        Editar
                    </Button>
                    <EliminarPersonaButton personaId={persona.personaId} local={persona.equipoRestModelLocal.nombre} visitante={persona.equipoRestModelVisitante.nombre}></EliminarPersonaButton>
                </div>
            }
            </Card.Header>
            <Card.Body>
                <Card.Title>
                    <Link to={`/personas/${persona.personaId}`}> {persona.equipoRestModelLocal.nombre} vs {persona.equipoRestModelVisitante.nombre} </Link>
                </Card.Title>            
                <Card.Text>
                    Fecha: {moment(persona.fecha).format('D[/]MM[/]YYYY')}
                </Card.Text>            
                <Card.Text>
                    Creado por {persona.usuarioRestModel.nombre}, {moment(persona.createdAt).fromNow()}
                </Card.Text>            
            </Card.Body>
        </Card>
    )
}