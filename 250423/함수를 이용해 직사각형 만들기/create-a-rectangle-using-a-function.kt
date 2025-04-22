fun main() {
    val (rowNum, colNum) = readln().split(" ").map { it.toInt() }
    // Please write your code here.
    val app = User()
    app.printRactangle(rowNum, colNum)
}

class User {
    fun printRactangle(n:Int, m:Int) {
        for(i in 1..n) {
            for(i in 1..m){
                print("1")
            }
            print("\n")
        }
    }
}