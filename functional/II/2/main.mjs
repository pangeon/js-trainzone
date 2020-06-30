function print(...args) {
    args.forEach(element => process.stdout.write(element + " "));
    process.stdout.write('\n');
}
export {print}; 
print("Witaj Kamil");
print("Witaj", "Kamil");
print("Witaj", "Kamil", "w świecie JavaScript\'u");