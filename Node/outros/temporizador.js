// Node schedule (cronograma)

const schedule = require('node-schedule')

// terça feira, qualquer dia do mes, qualquer mes, as 12 horas, qualquer minuto, de 5 em 5 segundos
const tarefa1 = schedule.scheduleJob('*/5 * 12 * * 2', function () {
     console.log('Executando Tarefa 1!', new Date().getSeconds())
})

// const tarefa1 = schedule.scheduleJob('5 * 12 * * 2') => seria exatamente no minuto 5

setTimeout(function () {
     tarefa1.cancel()
     console.log('Cancelando Tarefa !')
}, 20000)

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1, 5)]
regra.hour = 12
regra.second = 30

const tarefa2 = schedule.scheduleJob(regra, function() {
     console.log("Executando Tarefa 2!", new Date().getSeconds())
})
