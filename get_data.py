import config
import csv
from binance.client import Client
client = Client(config.API_KEY, config.API_SECRET)
#prices= client.get_all_tickers()
#print(prices)
#for price in prices:
    #print(price)
candlesticks = client.get_klines(symbol='BTCUSDT', interval=Client.KLINE_INTERVAL_15MINUTE)
file = open('data/15_minute.csv', 'w', newline='')
candlestick_writer = csv.writer(file,delimiter=' ')
for candlestick in candlesticks:
    print(candlestick)
    candlestick_writer.writerow(candlestick)
print(len(candlesticks))