export class Stack<T> {
    container: T[] = []

    push(data: T): void {
        this.container.push(data)
    }

    pop(): T | undefined {
        return this.container.pop()
    }

    size(): number {
        return this.container.length
    }
}