function cityTaxes(name, population, treasury) {

    let city = { 
        name, 
        population, 
        treasury,
        taxRate: 10,

        collectTaxes() {
            this.treasury += this.population * this.taxRate;
            this.treasury = Math.trunc(this.treasury);
        },

        applyGrowth(percentage) {
            this.population += this.population * percentage / 100;
            this.population = Math.trunc(this.population);
        },

        applyRecession(percentage) {
            this.treasury -= this.treasury * percentage / 100;
            this.treasury = Math.trunc(this.treasury);
        }
    };
    return city;

}

const city = cityTaxes('Tortuga', 7000, 15000); 
console.log(city);
// city.collectTaxes(); 
// console.log(city.treasury); 
// city.applyGrowth(5); 
// console.log(city.population);