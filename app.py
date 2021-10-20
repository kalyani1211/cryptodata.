import json

from flask import Flask, render_template, request, jsonify, json
import config
import csv
import datetime
import numpy as np
import pandas as pd
# import ccxt
from binance.client import Client
import codecs

app = Flask(__name__)
app.secret_key = b'somelongrandomstring'
client = Client(config.API_KEY, config.API_SECRET, tld='us')


@app.route("/")
def index():
    title = 'CoinView'
    # account = client.get_account()

    # balances = account['balances']
    # print(balances)
    return render_template('index.html', title=title)


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5001)


@app.route("/history")
def history():
    candlesticks = client.get_klines(symbol='BTCUSDT', interval=Client.KLINE_INTERVAL_15MINUTE)
    processed_candlesticks = []
    for data in candlesticks:
        candlesticks = {
            "time": data[0] / 1000,
            "open": data[1],
            "high": data[2],
            "low": data[3],
            "close": data[4]
        }
        processed_candlesticks.append(candlesticks)

    return jsonify(processed_candlesticks)


@app.route("/file")
def file():
    csv = pd.read_csv("C:/Users/Kalyani/PycharmProjects/pythonProject10/Lavels.csv")
    result = csv

    jstr = json.dumps(result, default=lambda csv: json.loads(csv.to_json()))
    for data in jstr:
        csv = {
           "lavels": data[0],


        }
        return json.loads(jstr)



