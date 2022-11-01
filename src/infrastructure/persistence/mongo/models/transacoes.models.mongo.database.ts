import mongoose from "mongoose";

export default mongoose.model(
    `transacoes`,
    new mongoose.Schema({
        date: Date,
        value: `number`,
        accountSourceId: `number`,
        status: `string`,
        accountSource: Object,
        type: `string`,
        targetSource: Object,
        envelop: `number`
    })
);