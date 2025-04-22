fun main() {
    val rowNum = readLine()!!.toInt()
    // Please write your code here.
    val start = Program()
    start.printLineNTime(rowNum)
}

class Program() {
    fun printLineNTime(num:Int) : Unit {
        for (i in 1..num) {
            println("12345^&*()_")
        }
    }
}