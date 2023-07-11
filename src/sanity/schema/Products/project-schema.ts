import { Rule } from "sanity";

export const Product = {
    name: 'product',
    title: "Product",
    type: "document",
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
            validation: (rule: Rule) => rule.required(),
        },
        {
            name: 'price',
            title: 'Price',
            type: 'number',
            options: {
                min: 1
            }
        }

    ]
}