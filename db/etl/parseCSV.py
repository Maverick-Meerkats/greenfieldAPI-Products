import csv
import os
import psycopg2
import time


dirname = os.path.dirname(__file__)
filename = os.path.join(dirname, '../../../db-data/')


try:
    connection = psycopg2.connect(user="postgres",
                                  password="babaka11",
                                  host="localhost",
                                  port="5432",
                                  database="greenFieldProducts",
                                  )

    cursor = connection.cursor()
    # Print PostgreSQL Connection properties

    # Print PostgreSQL version
    cursor.execute("SELECT version();")
    record = cursor.fetchone()
    print("You are connected to - ", record, "\n")
    connection.commit()

    with open(os.path.join(filename, 'product.csv'), mode='r') as csv_file:
        reader = csv.reader(csv_file, delimiter=',')
        i = reader.next()
        for row in reader:
            row = [col.strip() for col in row]
            print(row)
            cursor.execute(
                "INSERT INTO productInfo values(%s, %s, %s, %s, %s, %s) ON CONFLICT ON PRIMARY KEY(id) DO NOTHING ", row)
            connection.commit()


except (Exception, psycopg2.Error) as error:
    print("Error while connecting to PostgreSQL", error)
finally:
    # closing database connection.
    if(connection):
        # connection.commit()
        cursor.close()
        connection.close()
        print("PostgreSQL connection is closed")
