export class Queue<T> {
    container: T[] = [];

    enQueue(data: T): void {
        this.container.push(data);
    }

    deQueue(): T | undefined {
        return this.container.shift()
    }

    size(): number {
        return this.container.length
    }
}