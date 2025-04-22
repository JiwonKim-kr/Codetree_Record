fun main() {
    val n = readLine()!!.toInt()
    // Please write your code here.
    val app = User()
    app.makeNumRac(n)
}

class User {
    fun makeNumRac(n:Int) {
        var count = 1

        for(i in 1..n){
            for(i in 1..n){
                print("$count ")
                if (count == 9) {
                    count = 1
                } else {
                    count++
                }
            }
            print("\n")
        }
    }
}