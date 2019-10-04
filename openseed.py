#!/usr/bin/python

import sys
sys.path.append("..")
import mysql.connector
import socketserver
import account as Account
import steem_get as Get
import steem_submit as Submit
import leaderboard as LeaderBoard
import openseed_music as Music
import json

class TCPHandler(socketserver.BaseRequestHandler):
	def handle(self):
		response = ""
		self.data = self.request.recv(2048).strip()
		from_client = json.loads(self.data)
		action = from_client["act"]
		if Account.check_appID(from_client["appID"],from_client["devID"]):
			app = from_client["appID"]
			dev = from_client["devID"]
			
			if action == "accountcheck":
				response = Account.accountCheck(from_client["username"],from_client["passphrase"])
			elif action == "create":
				response = Account.create_user(from_client["username"],from_client["passphrase"],from_client["email"])
			elif action == "link":
				response = Account.Steem.link(from_client["username"],from_client["steemname"])
				if response:
					Submit.memo(from_client["username"],from_client["steemname"],response)
			elif action == "payment":
					response = Submit.payment(from_client["steemaccount"],from_client["to"],from_client["amount"],from_client["for"],from_client["postingkey"])
			elif action == "flush":
					response = Submit.payment(from_client["steemaccount"])
			elif action == "verify":
				response = Account.Steem.verify(from_client["username"],from_client["onetime"])
			elif action == "toleaderboard":
				response = LeaderBoard.update_leaderboard(dev,app,from_client["username"],from_client["data"],from_client["steem"],from_client["postingkey"])
			elif action == "getleaderboard":
				response = LeaderBoard.get_leaderboard(dev,app)
			elif action == "music":
				response = Music.get_curated_music(from_client["curator"])
			elif action == "music_json":
				response = Music.get_curated_music_json(from_client["curator"])
			elif action == "post":
				response = Get.get_post(from_client["author"],from_client["permlink"])
			elif action == "artist_search":
				response = Get.search_artist(from_client["author"],10000)
			elif action == "getaccount":
				response = Get.get_account(from_client["account"])
			elif action == "getfullaccount":
				response = Get.get_full_account(from_client["account"])
			elif action == "newaccounts":
				response = Music.get_new_artists()
			elif action == "newtracks":
				response = Music.get_new_tracks()
			elif action == "newtracks_json":
				response = Music.get_new_tracks_json()
			elif action == "genres":
				response = Music.get_genres()
			elif action == "genre":
				response = Music.get_genre_tracks(from_client["genre"])
			elif action == "genre_json":
				response = Music.get_genre_tracks_json(from_client["genre"])
			elif action == "getArtistTracks":
				response = Music.get_artist_tracks_json(from_client["author"])
			elif action == "connections":
				response = Get.get_connections(from_client["account"])
			elif action == "heartbeat":
				response = "Online"
				
		else:
			response = "App rejected"

		#print(response.encode("utf8"))
		self.request.sendall(response.encode("utf8"))

if __name__=="__main__":
	HOST, PORT = "0.0.0.0",8688
	# Create the server, binding to any interface on port 8688
	with socketserver.TCPServer((HOST, PORT), TCPHandler) as server:
		# Activate the server; this will keep running until you
		# interrupt the program with Ctrl-C
		server.serve_forever()
